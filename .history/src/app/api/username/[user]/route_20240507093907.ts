export async function GET(request: Request, { params }: {params: {slug: string, user: string}}) {
    // we will use params to access the data passed to the dynamic route
    const user = params.slug;
    return new Response(`Welcome to my Next application, user: ${user}`);
  }
  