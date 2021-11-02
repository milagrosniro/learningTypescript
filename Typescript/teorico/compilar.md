tscconfig.json --> es un archivo q sirve para influenciar ts en la manera en la que debe tratar los archivos d eun proyecto 
config del compilac, si queresmo q sea compatibke con ECMA6, si queremos permitir jsx, 

Para crear el archivo.
1) En la consola, parada en la carpeta del proyecto coloco: node_modules/.bin/tsc --init
2) en el archivo tsconfig en outDir coloc la carpeta donde quiero q vayan los archivos compilados
3)luego node_modules/.bin/tsc 


///
cuando importamos algo de alfguna libreria de nom es imp que si esta esta hecha con recta o no esta hecha con Ts, TENGA UN ARCHIVO DE EQUIVALENCIA EJ INDEX.D.TS

Para cuando importamos librerias que no tienen este archivo de quivalencia hayq ue ir a 
1) tsconfig.json --> alloJs = true //para que parsee el codigo fuente de js para configrarlo.

si no vienen types dentro del apaquete de lo q instale instalar npm i--save--dev @types/nombredelalibreria 
esto descarga el d.ts del esa libreria 