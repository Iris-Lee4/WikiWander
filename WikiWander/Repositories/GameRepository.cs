using WikiWander.Utils;
using WikiWander.Models;

namespace WikiWander.Repositories
{
    public class GameRepository : BaseRepository
    {
        public GameRepository(IConfiguration configuration) : base(configuration) { }  

        public List<Game> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) {
                    cmd.CommandText = @"
                       SELECT g.Id, g.UserProfileId, g.StartArticleId, g.EndArticleId, g.StepCount, g.Duration, a.Name as 'StartArticleName'
                        From Game g
                        LEFT JOIN UserProfile u on g.UserProfileId";

                    var reader = cmd.ExecuteReader();

                    var games = new List<Game>();
                    while (reader.Read()) {
                        games.Add(new Game()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            UserProfileId = DbUtils.GetInt(reader,"UserProfileId"),
                            // finish adding this
                        }

            }
        }

    }
}
