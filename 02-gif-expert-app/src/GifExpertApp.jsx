import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


function GifExpertApp() {

  // Por defecto el arreglo tendra el primer valor de asigando por el useState
  const [categories, setCategories] = useState(['Audi', 'Suzuki']);

  //Invoca y recibe el string del buscador
  const onAddCategory = (newCategory) => {
      //evita que se repitan elementos en al asignarlos al array de categories
      if (!categories.includes(newCategory)) {
          //Configuracion de Pila
          setCategories([newCategory, ...categories]);
          //Configuracion de Cola
          //setCategories([...categories, newCategory ]);
      }
  }

  return (
      <>
          <h1>Gif Expert App</h1>

          {/*Pasar onAddCategory atraves del props en el buscador de AddCategory*/}
          <AddCategory onNewCategory={(value) => onAddCategory(value)} />

          {/*Lista de Imagenes*/}
          <ol>
              {
                  categories.map(category => (
                      <GifGrid
                          key={category}
                          category={category}
                      />
                  ))
              }
          </ol>

      </>
  );
}

export default GifExpertApp;
