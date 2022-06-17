const mapAlbumDBToModel = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year,
});

const mapSongOnAlbumDBToModel = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer
});

module.exports = { mapAlbumDBToModel, mapSongOnAlbumDBToModel };
