import styles from "./Digital.module.css"
import { ProductsData } from './ProductData'

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className={styles.productdos}>
        {menuItems.map((Val, id) => {
          return (
            <button className={styles.button}
              
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          
          onClick={() => setItem(ProductsData)}
        >
          All
        </button>

      </div>
    </>
  );
};

export default Buttons;