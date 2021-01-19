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

1.18:https://td-deploy-git.vercel.app/

1.19:Un pull request permet de proposer du code à l'administrateur du projet git afin qu'il puissent autoriser ou non les modifications
	et les merge sur la branche cible. Souvent des tests sont lancés avant de merge les deux branches.

1.20:A chaque nouvelle branche vercel va déployer un environnement de preview avec le code de celle-ci. Une fois la pull request approuvée 
	 l'environnement de production est alors trigger.

1.21: L'environnement de production correspond à la bracnhe master, l'intêret d'utiliser des pull requests sur un projet est d'avoir des points
	de test et de validation du code avant de le merge dans la branche principale, et donc en production.
	Le workflow d'une feature est donc le suivant : Création d'une nouvelle branche --> Développement de la feature --> push sur github --> pull request --> validation et merge
	
1.22:Le serverless est le principe d'utiliser un service tiers afin de gérer l'hebergement de l'application et le load-balancing. La plupart du temps le déploiement peut être configuré
	programmatiquement par des triggers comme ici avec nos pull requests et ainsi faire gagner du temps aux développeurs.