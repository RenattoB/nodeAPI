import {Router} from 'express'
import * as taskCtrl from '../controllers/task_controller'


const router = Router();

router.get('/', taskCtrl.getTasks);

router.post('/', taskCtrl.createTasks);

router.get('/counter', taskCtrl.countTasks);

router.get('/done', taskCtrl.findTrueTasks);

router.get('/:id', taskCtrl.findTask);

router.put('/:id', taskCtrl.updateTask);

router.delete('/:id', taskCtrl.deleteTask);



export default router;
