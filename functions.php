<?php
/**
 * Created by PhpStorm.
 * User: Sebastien
 * Date: 2018-07-15
 * Time: 19:24
 */

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function () {
		echo '<div class="error"><p>Timber n\'est pas activé.  Il est nécessaire de l\'activer ici : <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
	} );

//	add_filter('template_include', function($template) {
//		return get_stylesheet_directory() . '/static/no-timber.html';
//	});

	return;
}

Timber::$dirname = array(
	'templates',
	'views'
);

/**
 * Class Portfolio
 */
class Portfolio extends Timber\Site {

	/**
	 * Portfolio constructor.
	 */
	function __construct() {
		add_filter( 'wp_check_filetype_and_ext', array( $this, 'allow_svg' ), 10, 4 );
		add_filter( 'upload_mimes', array( $this, 'cc_mime_types' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );

		add_action( 'init', array( $this, 'register_cpt' ) );
		add_action( 'after_setup_theme', array( $this, 'theme_setup' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'add_theme_scripts' ) );
		add_action( 'admin_head', array( $this, 'fix_svg' ) );
		$this->acf_options_page();
		$this->load_dependencies();

		parent::__construct();
	}

	/**
	 * Ajoute des éléments au contexte global de Timber
	 *
	 * @param array $context Contexte initial de Timber
	 *
	 * @return array Contexte avec les ajouts dedans
	 */
	public function add_to_context( $context ) {
		$context['some_stuff'] = 'Something new';

		return $context;
	}

	/**
	 * Enregistre les custom post types
	 */
	public function register_cpt() {
		register_post_type(
			'projets',
			array(
				'label'         => 'projet',
				'labels'        => array(
					'name'          => 'Projets',
					'singular_name' => 'Projet'
				),
				'supports'      => array(
					'title',
					'editor',
					'thumbnail',
					'excerpt'
				),
				'description'   => 'Réalisations présentées dans le cadre du portfolio.',
				'public'        => true,
				'has_archive'   => true,
				'menu_icon'     => 'dashicons-portfolio',
				'show_in_menu'  => true,
				'menu_position' => 20,
				'show_in_rest'  => true
			)
		);
	}

	/**
	 * Ajoute les scripts et les styles + localisation
	 */
	public function add_theme_scripts() {
		wp_enqueue_script( 'portfolio-build', get_template_directory_uri() . '/dist/build.js', null, null, true );
		wp_localize_script( 'portfolio-build', 'portfolio_localiz', array(
			'rest_url' => get_rest_url( null, 'wp/v2' )
		) );
	}

	/**
	 * Ajout de certaines fonctionnalités nécessaires
	 */
	public function theme_setup() {
		// Images
		add_theme_support( 'post-thumbnails' );
		add_image_size( 'projet-galerie', 370, 350, array( 'center', 'top' ) );
		add_image_size( 'projet-single', 770, 500, array( 'center', 'top' ) );

		// Menu
		register_nav_menus( array(
			'top' => 'Menu du haut'
		) );
	}

	/**
	 * Pages de paramètres ACF globaux
	 */
	public function acf_options_page() {
		if ( function_exists( 'acf_add_options_page' ) ) {
			acf_add_options_page( array(
				'page_title' => 'Options générales du thème',
				'menu_title' => 'Options du thème',
				'menu_slug'  => 'theme-general-settings',
				'capability' => 'edit_posts',
				'redirect'   => false
			) );

			acf_add_options_sub_page( array(
				'page_title'  => 'Liens des réseaux sociaux',
				'menu_title'  => 'Réseaux sociaux',
				'parent_slug' => 'theme-general-settings'
			) );
		}
	}

	/**
	 * Pour permettre le support de SVG, provient de CSS Tricks
	 *
	 * @param $data
	 * @param $file
	 * @param $filename
	 * @param $mimes
	 *
	 * @return array
	 */
	public function allow_svg( $data, $file, $filename, $mimes ) {
		global $wp_version;
		if ( $wp_version !== '4.7.1' ) {
			return $data;
		}

		$filetype = wp_check_filetype( $filename, $mimes );

		return array(
			'ext'             => $filetype['ext'],
			'type'            => $filetype['type'],
			'proper_filename' => $data['proper_filename']
		);
	}

	/**
	 * Aussi pour permettre le support de SVG
	 *
	 * @param $mimes
	 *
	 * @return mixed
	 */
	public function cc_mime_types( $mimes ) {
		$mimes['svg'] = 'image/svg+xml';

		return $mimes;
	}

	/**
	 * Aussi pour les SVG
	 */
	public function fix_svg() {
		echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
	}
}

new Portfolio();