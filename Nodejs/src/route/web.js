import express from "express";
import homeController, { getHomePage, getCRUD, postCRUD, displayGetCRUD, getEditCRUD, putCRUD, deleteCRUD } from "../controllers/homeController";
import userController, {
    handleLogin, handleGetAllUsers, handleCreateNewUser, handleEditUser, handleDeleteUser,
    getAllCode
} from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);
    router.get('/crud', getCRUD);

    router.post('/post-crud', postCRUD);
    router.get('/get-crud', displayGetCRUD);
    router.get('/edit-crud', getEditCRUD);
    router.post('/put-crud', putCRUD);
    router.get('/delete-crud', deleteCRUD);

    router.post('/api/login', handleLogin)
    router.get('/api/get-all-users', handleGetAllUsers);
    router.post('/api/create-new-user', handleCreateNewUser);
    router.put('/api/edit-user', handleEditUser);
    router.delete('/api/delete-user', handleDeleteUser);

    router.get('/allcode', getAllCode);



    return app.use("/", router);
}

module.exports = initWebRoutes;