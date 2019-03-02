<?php

/**
 * Class Portfolio_SVG_Fixer
 * Règle le problème d'utilisation de SVGs dans le media library
 */
class Portfolio_SVG_Fixer {

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
		?>
		<style type="text/css">
			.attachment-266x266, .thumbnail img {
				width: 100% !important;
				height: auto !important;
			}
		</style>
		<?php
	}
}