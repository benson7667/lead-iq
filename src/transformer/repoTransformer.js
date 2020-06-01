const repoTransfromer = {
  toState: (data) => {
    return {
      id: data.id,
      repoName: data.name,
      repoFullName: data.full_name,
      description: data.description || '',
      html_url: data.html_url,
      language: data.language || '',
      forkCount: data.forkCount || 0,
      updatedAt: data.updated_at,
    }
  },
}

export default repoTransfromer
