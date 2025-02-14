import { EditIcon, DeleteIcon } from "~/icon";
import { c } from "../AdminLayout"
import changeRole from "../services/changeRole";

export default function AdminListItem({img, handleDelete, handleEdit, name, id, objId, singerName, role, nation, view}){
   
   return (
            <li>
              <div className={c("left")}>
                 <img src={img} alt="" />
                 <div className={c("flex w-250px")}>
                    <p>
                       name: <span>{name}</span>
                    </p>
                    <p>
                       id: <span>{id}</span>
                    </p>
                    {
                        singerName && 
                        <p>
                            singerName:
                            {(singerName).map((name, i) => (
                                <span key={i}>
                                    {name}
                                    {i < singerName.length - 1 && ", "}
                                </span>
                            ))}
                        </p>
                    }
                    {role && <p>role: <span>{role}</span></p>}
                    {nation && <p>nation: <span>{nation}</span></p>}
                 </div>
                 {
                  role && <form onSubmit={changeRole}>
                              <select name="role" id={id} className="m-l-10 w-100px h-25px">
                                 <option value={role}>{role}</option>
                                 <option value={role === 'admin' ? 'user' : 'admin'}>{role === 'admin' ? 'user' : 'admin'}</option>
                              </select>
                              <button type="submit" style={{marginLeft: '5px'}}>
                                 đổi role
                              </button>
                          </form>
                 }
              </div>
              <div className={c("right")}>
                  <div>
                     {view !== 0 
                     ?<p>view: <span>{view}</span></p>
                     :<p>view: <span>0</span></p>
                     }
                  </div>
                 <button title="edit" onClick={() => handleEdit(objId)} style={{margin: '0 10px'}} disabled>
                    <EditIcon fill="green" fontSize={25} />
                 </button>
                 <button title="delete" onClick={() => handleDelete(objId)}>
                    <DeleteIcon fill="red" fontSize={25} />
                 </button>
              </div>
           </li>
       );
}