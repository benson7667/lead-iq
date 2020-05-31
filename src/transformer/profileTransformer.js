const profileTransformer = {
  toState: (data) => {
    return {
      id: data.id,
      login: data.login,
      email: data.email || '',
      name: data.name,
      avatar_url: data.avatar_url,
      bio: data.bio || '',
      blog: data.blog || '',
      company: data.company || '',
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      githubUrl: data.html_url,
      location: data.location || '',
    }
  },
}

export default profileTransformer
