function status(request, response) {
  response.status(200).json({ chave: "above the value" });
}

export default status;
