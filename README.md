1.4:vercel -v

1.5:ng new td-deploy

1.6:vercel (à la racine du projet)

1.7:vercel list

1.8:vercel logs https://td-deploy.vercel.app/

1.9:vercel inspect https://td-deploy.vercel.app/

	Elle permet de voir un rapide résumé de la configuration de notre application déploiyée
1.10:Les variables d'environnement permettent de stocker des configurations et autres variables comme des flags
	à l'extérieur de l'application. On peut ainsi injecter des valeurs que l'on ne veut pas dans le code source
	
1.11:vercel env add plain ENV_VAR production

1.12:vercel env ls

1.13:Les secrets permettent de stocker des informations partagées sur plusieurs projets ou pour stocker des informations
	sensibles car elles sont ecnryptées
	
1.15:vercel secrets add secret-1 secret1value
	 vercel env add secret ENV_SECRET_1 production

1.16: Les trois environnements à disposition sont production, preview et development
	Ces environnements nous permettent de modifier un environnement sans changer les autre, par exemple tester des modification
	dans l'environnement de development en laissant l'environnement de production fonctionnel en cas d'erreur.
	