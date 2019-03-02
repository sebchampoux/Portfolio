<?php
/**
 * Created by PhpStorm.
 * User: Sebastien
 * Date: 2019-03-02
 * Time: 15:39
 */

/**
 * Class Portfolio_Admin_Styles
 * Styles pour la zone d'administration du site
 */
class Portfolio_Admin_Styles {
	/**
	 * CSS personnalisé pour la page de login
	 */
	public function login_custom_css() {
		wp_enqueue_style( 'login-stylesheet', get_stylesheet_directory_uri() . '/static/css/login-screen.css' );
	}

	/**
	 * Modifie le URL du logo de la page login
	 *
	 * @param $url string URL original
	 *
	 * @return string url modifié
	 */
	public function login_headerurl( $url ) {
		$url = get_home_url();

		return $url;
	}
}