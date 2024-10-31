export default function tempo(request, response: any) {
  const tempo = new Date()
  
  response.json({
    date: tempo.toGMTString()
  })
}