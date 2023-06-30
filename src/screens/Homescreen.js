import React from "react";
import Pizza from "../components/Pizza";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading"
import Error from "../components/Error";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector(state => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  },   // eslint-disable-next-line
  []);
 

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error={'Something went wrong'}/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3"  key = {pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
