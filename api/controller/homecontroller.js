import { User } from "../model/User.js";

const homeController = (req, res) => {
  res.status(200).send({ status: true, message: "default controller" });
};

const displayController = async (req, res) => {
  const Users = await User.find();
  res.status(200).send({
    status: true,
    data: Users,
    message: "Sucessfully displayed",
  });
};

const addController = async (req, res) => {
  var date = new Date();
  var date1 = date.toJSON();
  var TransactionDate = new Date(date1).toUTCString();
  var TotalBalance = 100000;
  var { SN, Stockname, TransactionType, Quantity, Rate } = req.body;
  Rate = Number(Rate);
  var Amount = Quantity * Rate;
  var Status = "";
  var ProfitBalance = 0;
  var LossBalance = 0;
  var NetBalance = 0;
  if (Amount < TotalBalance) {
    Status = "Profit";
    ProfitBalance = TotalBalance - Amount;
    NetBalance = ProfitBalance;
  } else {
    Status = "Loss";
    LossBalance = TotalBalance - Amount;
    NetBalance = LossBalance;
  }
  console.log(Status, ProfitBalance, LossBalance, NetBalance);
  var Users = new User({
    SN,
    Stockname,
    TransactionType,
    Quantity,
    Rate,
    Amount,
    TransactionDate,
    TotalBalance,
    Status,
    NetBalance,
  });
  Users.save()
    .then((data) => {
      res.status(400).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(500).send({ status: false, message: "error to save details" });
    });
};

const singledisplayController = async (req, res) => {
  const { StockName } = req.params;
  const Users = await User.findOne({ Stockname: StockName });
  if (!Users) {
    res.status(400).send({ status: false });
  } else {
    res.status(400).send({ status: true, data: Users });
  }
};

const putController = async (req, res) => {
  var { StockName } = req.params;
  var date = new Date();
  var date1 = date.toJSON();
  var TransactionDate = new Date(date1).toUTCString();
  var { Stockname, TransactionType, Quantity } = req.body;

  await User.findByIdAndUpdate(StockName, {
    Stockname: Stockname,
    TransactionType: TransactionType,
    Quantity: Quantity,
    TransactionDate: TransactionDate,
  })
    .then((data) => {
      res.status(400).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(500).send({ status: false, message: err });
    });
};

const delController = async (request, response) => {
  var { StockName } = request.params;
  //   await User.deleteOne({ _id: id })
  //   await User.findByIdAndDelete(StockName)
  await User.deleteOne({ Stockname: StockName })
    .then((data) => {
      response
        .status(400)
        .send({ status: true, data: data, message: "sucessfully deleted" });
    })
    .catch((err) => {
      response.status(500).send({ status: false });
    });
};
export {
  homeController,
  displayController,
  addController,
  singledisplayController,
  delController,
  putController,
};
