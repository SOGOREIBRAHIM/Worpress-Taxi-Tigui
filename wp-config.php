<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'taxitigui' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+<uE|c]/MR9ma7u(pMI!JCW#M1V2d,90|B%/^$NVO%qw`W!(n)>9Z<&8$lhS(ib=' );
define( 'SECURE_AUTH_KEY',  '0|KSB~^Fe-Vr_&9W8t|mwT]Y7k`{!f2od=]o$X=/5.U0sJ+C*KW.VYsQ1LM^^c=4' );
define( 'LOGGED_IN_KEY',    '~eTA=?]Q.&JQ$HHj$1KB/mLf]~9k8%!T$Z=STq.Unr47(0TO2&:Z9/$W?J:K>Tn8' );
define( 'NONCE_KEY',        '4F _x6;G)s?J9m_z(F&WNn]9G[(G!++,QNeWc+z1~E=cBoWJ0z[0SC@k?NW[6<)(' );
define( 'AUTH_SALT',        '<43yFMr!k,56D8`^P_+ac^Yc&O,Fy]Gh#&<%O5;(P`w^%f 3vg}()J*nsNJN;708' );
define( 'SECURE_AUTH_SALT', '7gigw7R7[0?d--f0Rg{n5~tSCmCWCStmV&ps~(e80xm]Zf,OlpPy>N jeQWa.VFD' );
define( 'LOGGED_IN_SALT',   'F0u.2Vw)+KcH/sy(#!0wuA[u|ichf*:)Fv&mR*$g8)|L1koT<83r})[I6>o7HScU' );
define( 'NONCE_SALT',       '[!{)7jYr<(v8xt9MBo,%3tPrmKw/#Q/C;}V9a-O8FR7YC/xm1vw{+u.G,e[Z?-J;' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
