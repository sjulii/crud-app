import React, { useState } from "react";
import Modal from "../UI-Elements/Modal";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";
const ProductItem = ({ item, list, setList }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const remove = () => {
    console.log(item);
    try {
      let newList = list.filter((l) => l.id !== item.id);
      setList(newList);
    } catch (err) {
      console.log(err);
    } finally {
      setShowDeleteModal(false);
    }
  };

  const edit = (product) => {
    try {
      let newList=list.map((l)=>{
        if(l.id===product.id){
          return product;
        }
        else return l
      })
      setList(newList)
     
    } catch (err) {
      console.log(err);
    } finally {
      setShowEditModal(false);
    }
  };
  return (
    <>
      <tr>
        <td scope="row">{item.name}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{item.createdAt}</td>
        <td>{item.status}</td>
        <td>
          <button
            className="btn btn-block btn-success"
            onClick={() => setShowEditModal(true)}
          >
            Edit
          </button>
          {showEditModal && (
            <Modal title="Edit Product">
              <EditForm
                item={item}
                editItem={edit}
                setEditModal={setShowEditModal}
              />
            </Modal>
          )}
        </td>
        <td>
          <button
            className="btn btn-block btn-danger"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
          {showDeleteModal && (
            <Modal title="Delete Product">
              <DeleteForm deleteItem={remove} setModal={setShowDeleteModal} />
            </Modal>
          )}
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
