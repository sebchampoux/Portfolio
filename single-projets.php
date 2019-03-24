<?php
/**
 * Created by PhpStorm.
 * User: Sebastien
 * Date: 2019-01-10
 * Time: 18:37
 */

$context             = Timber::get_context();
$context['template'] = 'single-projet';
$context['project']  = new Timber\Post();

// Trouver suivant si non-défini
if ( $context['project']->next() === false ) {
	$query           = Timber::get_posts( array(
		'post_type'      => 'projets',
		'orderby'        => 'date',
		'order'          => 'ASC',
		'posts_per_page' => 1,
		'status'         => 'publish'
	) );
	$context['next'] = $query[0];
}

// Trouver précédent si non-défini
if ( $context['project']->prev() === false ) {
	$query           = Timber::get_posts( array(
		'post_type'      => 'projets',
		'orderby'        => 'date',
		'order'          => 'DESC',
		'posts_per_page' => 1,
		'status'         => 'publish'
	) );
	$context['prev'] = $query[0];
}

Timber::render( array( 'single-projets.twig', 'index.twig' ), $context );