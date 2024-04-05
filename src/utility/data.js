
export const contentTypes = [
    {
      type: 'movies',
      endpoint: 'https://api.themoviedb.org/3/discover/movie?api_key=e01dd6b7442cd6f6d80eb2340f9db82c',
      nameKey: 'original_title',
      bgImageKey: 'backdrop_path',
      releasedKey: 'release_date',
      overview: 'overview',
      rating: 'vote_average'
    },
    {
      type: 'games',
      endpoint: 'https://api.rawg.io/api/games?token&key=ad55befefa4449658e9cf82bc88f1c0f',
      nameKey: 'name',
      bgImageKey: 'background_image',
      platform: 'parent_platforms',
      releasedKey: 'released',
      rating: 'rating'
    },
    {
      type: 'Dota2',
      endpoint: 'https://api.opendota.com/api/teams?limit=100',
      nameKey: 'name',
      bgImageKey: 'logo_url',
      wins: 'wins',
      rating: 'rating'
    }
  ];