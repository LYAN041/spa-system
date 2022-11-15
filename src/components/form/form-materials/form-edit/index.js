import React from "react";
import { useState } from "react";

const initialStateProducts = {
    amount: '',
    validity: '',
    lastpurchase: '',
    nextpurchase: ''
 };

const FormEditProduct = (props) => {

    const [fieldsProducts, setFieldsProducts] = useState(initialStateProducts);

    const handlefieldsProductsChange = (e) => setFieldsProducts({
    ...fieldsProducts,
    [e.currentTarget.name]: e.currentTarget.value
  });
  
  const handleSubmitProducts = e => {
    e.preventDefault()
    props.editProduct(fieldsProducts)
    props.toggleProduct()
  };

    return(
       
        <form autoComplete="off" onSubmit={handleSubmitProducts}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Quantidade</span>
              <input type="number" name="amount" value={fieldsProducts.amount} onChange={handlefieldsProductsChange} placeholder="Ex. 5" />
            </div>
            <div className="input-box">
              <span className="details">Validade</span>
              <input type="date" name="validity" value={fieldsProducts.validity} onChange={handlefieldsProductsChange} />
            </div>
            <div className="input-box">
              <span className="details">Data da última compra</span>
              <input type="date" name="lastpurchase" value={fieldsProducts.lastpurchase} onChange={handlefieldsProductsChange}/>
            </div>
            <div className="input-box">
              <span className="details">Data da próxima compra</span>
              <input type="date" name="nextpurchase" value={fieldsProducts.nextpurchase} onChange={handlefieldsProductsChange} />
            </div>
          </div>
          <div className="btns-side">
         <div class="button-side">
           <input type="submit" value="Confirmar" />
         </div>
         <div class="button-side-cancel">
           <input type="button" value="Cancelar" onClick={props.toggleProduct} />
         </div>
       </div>
        </form>
        
    )

}

export default FormEditProduct;