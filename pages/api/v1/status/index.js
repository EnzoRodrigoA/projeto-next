function status(request, response) {
  response.status(200).json({ message: "Tudo certo por aqui, Lindão" });
}
export default status;
