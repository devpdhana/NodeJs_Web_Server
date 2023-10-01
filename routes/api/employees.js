const express = require('express')
const router = express.Router()
const path = require('path')

const employeeController = require('../../controllers/employeesController')

router
  .route("/")
  .get(employeeController.getAllemployees)
  .post(employeeController.createNewemployee)
  .put(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

router.route('/:id').get(employeeController.getEmployee)

module.exports = router