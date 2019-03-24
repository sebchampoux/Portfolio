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

	private $_svg_fixer;
	private $_admin_styles;

	/**
	 * Portfolio constructor.
	 */
	function __construct() {
		parent::__construct();

		$this->load_dependencies();
		$this->instantiate_dependencies();

		$this->register_filters();
		$this->register_actions();
	}

	/**
	 * Enregistre les filtres
	 */
	public function register_filters() {
		add_filter( 'wp_check_filetype_and_ext', array( $this->_svg_fixer, 'allow_svg' ), 10, 4 );
		add_filter( 'upload_mimes', array( $this->_svg_fixer, 'cc_mime_types' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
	}

	/**
	 * Enregistre les actions
	 */
	public function register_actions() {
		add_action( 'init', array( $this, 'register_cpt' ) );
		add_action( 'after_setup_theme', array( $this, 'theme_setup' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'add_theme_scripts' ) );
		add_action( 'login_enqueue_scripts', array( $this->_admin_styles, 'login_custom_css' ) );
		add_action( 'login_headerurl', array( $this->_admin_styles, 'login_headerurl' ) );
		add_action( 'admin_head', array( $this->_svg_fixer, 'fix_svg' ) );
	}

	/**
	 * Charge les autres classes dont celle-ci est dépendante
	 */
	public function load_dependencies() {
		require_once get_template_directory() . '/inc/Portfolio_SVG_Fixer.php';
		require_once get_template_directory() . '/inc/Portfolio_Admin_Styles.php';
	}

	/**
	 * Instancie les autres classes dont celle-ci dépend
	 */
	public function instantiate_dependencies() {
		$this->_svg_fixer    = new Portfolio_SVG_Fixer();
		$this->_admin_styles = new Portfolio_Admin_Styles();
	}

	/**
	 * Ajoute des éléments au contexte global de Timber
	 *
	 * @param array $context Contexte initial de Timber
	 *
	 * @return array Contexte avec les ajouts dedans
	 */
	public function add_to_context( $context ) {
		$context['header']          = array( 'hero_image' => get_header_image() );
		$context['top_menu']        = new Timber\Menu( 'top' );
		$context['social_networks'] = new Timber\Menu( 'socials' );
		$context['languages']       = apply_filters( 'wpml_active_languages', null, 'orderby=id&order=desc' );

		// Je veux que toutes les pages aient la classe page
		if ( ! strpos( $context['body_class'], 'page' ) ) {
			$context['body_class'] .= ' page';
		}

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
		// Styles
		wp_enqueue_style( 'portfolio-fonts', 'https://fonts.googleapis.com/css?family=Oswald:300,400,700|Raleway:300,400,700' );
		wp_enqueue_style( 'portfolio-fontello', get_stylesheet_directory_uri() . '/static/fontello/css/portfolio.css' );
		wp_enqueue_style( 'portfolio-main-css', get_stylesheet_directory_uri() . '/static/css/styles.css' );

		// Scripts
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'gsap-tweenmax', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js' );
		wp_enqueue_script( 'gsap-scrollto', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/plugins/ScrollToPlugin.min.js' );
		wp_enqueue_script( 'portfolio-dist', get_stylesheet_directory_uri() . '/static/js/build.js', array(
			'jquery',
			'gsap-tweenmax',
			'gsap-scrollto'
		), '3.0.0', false );
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
			'top'     => 'Menu du haut',
			'socials' => 'Réseaux sociaux'
		) );

		// En-tête
		add_theme_support( 'custom-header', array(
			'width'       => 960,
			'height'      => 940,
			'header-text' => false
		) );

		// Text domain
		load_theme_textdomain( 'portfolio', get_template_directory() . '/languages' );
	}
}

new Portfolio();