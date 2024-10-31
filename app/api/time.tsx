export default function time(request, response) {
  const dynamicDate = new Date()

  response.json({
    date: dynamicDate.toUTCString()
  })
}