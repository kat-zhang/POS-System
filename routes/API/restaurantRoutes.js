const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantController");
const menuRoutes = require("./menuRoutes");
// const reservationRoutes = require("./reservationRoutes");
// const receiptRoutes = require("./receiptRoutes");
// const employeeRoutes = require("./employeeRoutes");
const tableController = require("../../controllers/tableController");

// Matches with "/api/&rest"
router
  .route("/")
  .get(restaurantController.find)
  .post(restaurantController.create);

// Matches with "/api/&rest/=:id"
router
  .route("/=:id")
  .get(restaurantController.findById)
  .put(restaurantController.update)
  .delete(restaurantController.remove);

// Matches with "/api/&rest/name"
router
  .route("/name")
  .post(restaurantController.findByName);

// Matches with "/api/&rest/justNames"
router
  .route("/justNames")
  .get(restaurantController.returnNames);

// Matches with "/api/&rest/=:id/&menus"
router.use("/=:id/&menus", menuRoutes);

router
  .route("/=:id/&tables/=:tableIndex")
  .put(tableController.updateAtIndex)
  .delete(tableController.removeAtIndex);
  
router.route("/=:id/&tables/=:tableIndex/paid")
  .put(tableController.billPaid);
// router.use("/=:id/&reservations", reservationRoutes);
// router.use("/=:id/&employees", employeeRoutes);
// router.use("/=:id/&receipts", receiptRoutes);

module.exports = router;
