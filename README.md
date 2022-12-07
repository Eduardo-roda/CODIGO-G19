# Primero pasos Git

## Inicializar git

```
git init
```

## Establecer una conexión con mi repositorio remoto

```
git remote add origin https://github.com/12aptor/CODIGO-G19.git
```

## Definir la rama principal (default)

```
git branch -M main
```

## Añadir los cambios a mi repositorio local

```
git add --all
git add .
```

## Hacer commit 

```
git commit -m "mi primer commit"
```

## Subir los cambios al repositorio remoto

```
git push origin main
```

## Crear una nueva rama


```
git branch semana01
```

## Cambiar de rama a `semana01`

```
git switch semana01
```

## Luego de añadir archivos a la rama semana01 subimos los cambios

```
git add --all
git commit -m "cambios de la rama semana01"
git push origin semana01
```

## Para clonar un repositorio 

```
git clone https://github.com/12aptor/CODIGO-G19.git
```

## Para descargar cambios a nivel de repositorio

```
git fetch
```

## Para descargar cambios `dentro de una rama`

```
git pull origin semana02
```