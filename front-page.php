<?php
/**
 * Created by PhpStorm.
 * User: Sebastien
 * Date: 2019-01-10
 * Time: 18:37
 */

$context             = Timber::get_context();
$context['template'] = 'front-page';
$context['post']     = new Timber\Post();
$context['projets']  = Timber::get_posts( array(
	'post_type' => 'projets',
	'orderby'   => 'date',
	'order'     => 'DESC',
	'status'    => 'publish'
) );
Timber::render( array( 'front-page.twig', 'index.twig' ), $context );
