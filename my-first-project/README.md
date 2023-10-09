# Create a React App

- run `npm create vite@latest name-of-your-app`
- Select `React` and then `JavaScript + SWC`
- Follow the instructions :)

# Cloning a Lab

- Fork and Clone the lab
- Go in the newly reated folder (`cd`...)
- Run `npm i` or `npm install`
- Open VsCode `code .`
- Run you local React App with `npm run dev`

# In the eslintrc.cjs

Add this line in the `rules` Object:

```json
		"props/types": false,
```

- This will prevent react eslint from asking for props validation.
