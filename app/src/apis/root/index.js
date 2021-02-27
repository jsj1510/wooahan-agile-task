"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./root.ctrl");

router.post("/todolist", ctrl.todolist.read);
router.put("/todolist", ctrl.todolist.create);
router.delete("/todolist/:index", ctrl.todolist.delete);

router.post("/submit", ctrl.checkbox.isAnswer);

router.get("/check", ctrl.login.check);
router.post("/login", ctrl.login.login);

module.exports = router;
