install: install-project
 					npm ci

brain-games: brain-games
						node bin/brain-games.js

brain-even: brain-even
						node bin/brain-even.js

brain-calc: brain-calc
						node bin/brain-calc.js


publish: publish
				npm publish --dry-run

lint: lint	
			npx eslint .
 