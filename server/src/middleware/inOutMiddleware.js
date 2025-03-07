export const init = (req, res, next) => {
  res.data = {};
  next();
}

export const setRouteFound = (req, res, next) => {
  res.routeFound = true;
  next();
};

export const send = (req, res) => {
  if (Object.keys(res.data).length > 0) {
    res.status(res.statusCode || 200).json(res.data);
  } else {
    res.status(204).send()
  }
}

export const start = (req, res, next) => {
  console.log(
    `Request started on ${req.method}$ - ${req.originalUrl}`,
  );
  req.perf = Date.now();
  next();
}

export const end = (req, res, next) => {
  const delta = Date.now() - req.perf;
  console.log(
    `Request ended on ${req.method}${req.headers["x-forwarded-path"]} in ${delta}ms`,
  );
  next();
}
