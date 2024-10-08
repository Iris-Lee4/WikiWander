using WikiWander.Models;
using WikiWander.Utils;

namespace WikiWander.Repositories
{
    public class ArticleRepository : BaseRepository, IArticleRepository
    {
        public ArticleRepository(IConfiguration configuration) : base(configuration) { }
        public List<Article> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Name 
                                        FROM Article 
                                        ";
                    var reader = cmd.ExecuteReader();

                    var articles = new List<Article>();
                    while (reader.Read())
                    {
                        articles.Add(new Article()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                        });
                    }

                    reader.Close();

                    return articles;
                }
            }
        }

        public Article GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Name FROM Article WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Article article = null;
                    if (reader.Read())
                    {
                        article = new Article()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                        };
                    }
                    reader.Close();

                    return article;
                }
            }
        }
    }
}
