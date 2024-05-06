export async function GET(request, {params}) {
  return {
    status: 200,
    body: {
      username: params.user
    }
  }
}