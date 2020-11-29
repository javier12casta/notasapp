import http from "../http-common";
import user from '../pages/login'
class Service {
  getAll() {
    return http.get("/user/");
  }

  get(id: String) {
    return http.get(`/user/${id}`);
  }

  create(data: Object) {
    return http.post("/user/", data);
  }

  update(id: String, data: Object) {
    return http.put(`/user/${id}`, data);
  }

  delete(id: String) {
    return http.delete(`/user/${id}`);
  }

  deleteAll() {
    return http.delete(`/user/`);
  }

  /* findByTitle(title) {
    return http.get(`/user?title=${title}`);
  } */
}

export default new Service();