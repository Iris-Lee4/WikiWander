using WikiWander.Utils;
using WikiWander.Models;

namespace WikiWander.Repositories
{
    public class GameRepository : BaseRepository, IGameRepository
    {
        public GameRepository(IConfiguration configuration) : base(configuration) { }

        public List<Game> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT g.Id, g.UserProfileId, u.DisplayName, g.StartArticleId, g.EndArticleId, g.StepCount, g.Duration, s.Name as 'Start Article', e.Name as 'End Article'
                        FROM Game g
                        LEFT JOIN UserProfile u on g.UserProfileId = u.Id
                        LEFT JOIN Article s ON s.Id = g.StartArticleId
                        LEFT JOIN Article e ON e.Id = g.EndArticleId
                        ";

                    var reader = cmd.ExecuteReader();

                    var games = new List<Game>();

                    while (reader.Read())
                    {
                        games.Add(new Game()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                DisplayName = DbUtils.GetString(reader, "DisplayName")
                            },
                            StartArticleId = DbUtils.GetInt(reader, "StartArticleId"),
                            StartArticle = new Article()
                            {
                                Name = DbUtils.GetString(reader, "Start Article")
                            },
                            EndArticleId = DbUtils.GetInt(reader, "EndArticleId"),
                            EndArticle = new Article()
                            {
                                Name = DbUtils.GetString(reader, "End Article"),
                            },
                            StepCount = DbUtils.GetInt(reader, "StepCount"),
                            Duration = DbUtils.GetInt(reader, "Duration")

                        });
                    }

                    reader.Close();
                    return games;
                }

            }
        }

        public List<Game> GetAllByUserId(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT g.Id, g.UserProfileId, u.DisplayName, g.StartArticleId, g.EndArticleId, g.StepCount, g.Duration, s.Name as 'Start Article', e.Name as 'End Article'
                        FROM Game g
                        LEFT JOIN UserProfile u on g.UserProfileId = u.Id
                        LEFT JOIN Article s ON s.Id = g.StartArticleId
                        LEFT JOIN Article e ON e.Id = g.EndArticleId
                        WHERE g.UserProfileId = @Id
                            ";
                    cmd.Parameters.AddWithValue("@Id", userId);

                    var reader = cmd.ExecuteReader();

                    var games = new List<Game>();

                    while (reader.Read())
                    {
                        games.Add(new Game()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                DisplayName = DbUtils.GetString(reader, "DisplayName")
                            },
                            StartArticleId = DbUtils.GetInt(reader, "StartArticleId"),
                            StartArticle = new Article()
                            {
                                Name = DbUtils.GetString(reader, "Start Article")
                            },
                            EndArticleId = DbUtils.GetInt(reader, "EndArticleId"),
                            EndArticle = new Article()
                            {
                                Name = DbUtils.GetString(reader, "End Article"),
                            },
                            StepCount = DbUtils.GetInt(reader, "StepCount"),
                            Duration = DbUtils.GetInt(reader, "Duration")

                        });
                    }

                    reader.Close();

                    return games;
                }
            }
        }

        public Game GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT g.Id, g.UserProfileId, u.DisplayName, g.StartArticleId, g.EndArticleId, g.StepCount, g.Duration, s.Name as 'Start Article', e.Name as 'End Article'
                        FROM Game g
                        LEFT JOIN UserProfile u on g.UserProfileId = u.Id
                        LEFT JOIN Article s ON s.Id = g.StartArticleId
                        LEFT JOIN Article e ON e.Id = g.EndArticleId
                        WHERE g.Id = @id
                        ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    Game game = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        game = new Game()
                        {

                            Id = DbUtils.GetInt(reader, "id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                DisplayName = DbUtils.GetString(reader, "DisplayName")
                            },
                            StartArticleId = DbUtils.GetInt(reader, "StartArticleId"),
                            StartArticle = new Article()
                            {
                                Name = DbUtils.GetString(reader, "Start Article")
                            },
                            EndArticleId = DbUtils.GetInt(reader, "EndArticleId"),
                            EndArticle = new Article()
                            {
                                Name = DbUtils.GetString(reader, "End Article"),
                            },
                            StepCount = DbUtils.GetInt(reader, "StepCount"),
                            Duration = DbUtils.GetInt(reader, "Duration")

                        };
                    }
                    reader.Close();

                    return game;
                }
            }
        }

        public void Add(Game game)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                     INSERT INTO Game (UserProfileId, StartArticleId, EndArticleId, StepCount, Duration)
                     OUTPUT INSERTED.ID
                     VALUES (@UserProfileId, @StartArticleId, @EndArticleId, @StepCount, @Duration)
                     ";
                    DbUtils.AddParameter(cmd, "@UserProfileId", game.UserProfileId);
                    DbUtils.AddParameter(cmd, "@StartArticleId", game.StartArticleId);
                    DbUtils.AddParameter(cmd, "@EndArticleId", game.EndArticleId);
                    DbUtils.AddParameter(cmd, "@StepCount", game.StepCount);
                    DbUtils.AddParameter(cmd, "@Duration", game.Duration);

                    game.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(Game game)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Game
                           SET UserProfileId = @UserProfileId,
                               StartArticleId = @StartArticleId,
                               EndArticleId = @EndArticleId,
                               StepCount = @StepCount,
                               Duration = @Duration
                         WHERE Id = @Id"
                    ;

                    DbUtils.AddParameter(cmd, "@UserProfileId", game.UserProfileId);
                    DbUtils.AddParameter(cmd, "@StartArticleId", game.StartArticleId);
                    DbUtils.AddParameter(cmd, "@EndArticleId", game.EndArticleId);
                    DbUtils.AddParameter(cmd, "@StepCount", game.StepCount);
                    DbUtils.AddParameter(cmd, "@Duration", game.Duration);
                    DbUtils.AddParameter(cmd, "@Id", game.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Game WHERE Id = @Id;";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
