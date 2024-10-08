using WikiWander.Utils;
using WikiWander.Models;

namespace WikiWander.Repositories
{
    public class MessageRepository : BaseRepository, IMessageRepository
    {
        public MessageRepository(IConfiguration configuration) : base(configuration) { }

        public List<Message> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT m.Id, m.UserProfileId, u.DisplayName, m.Content, m.TimeStamp
                        FROM Message m
                        LEFT JOIN UserProfile u on m.UserProfileId = u.Id
                        ORDER BY m.TimeStamp
                        ";

                    var reader = cmd.ExecuteReader();

                    var messages = new List<Message>();

                    while (reader.Read())
                    {
                        messages.Add(new Message()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                DisplayName = DbUtils.GetString(reader, "DisplayName")
                            },
                            Content = DbUtils.GetString(reader, "Content"),
                            TimeStamp = DbUtils.GetDateTime(reader, "TimeStamp")
                        });
                    }

                    reader.Close();
                    return messages;
                }

            }
        }

        public Message GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT m.Id, m.UserProfileId, u.DisplayName, m.Content, m.TimeStamp
                        FROM Message m
                        LEFT JOIN UserProfile u on m.UserProfileId = u.Id
                        WHERE Id = @Id
                        ";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    Message message = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        message = new Message()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                DisplayName = DbUtils.GetString(reader, "DisplayName")
                            },
                            Content = DbUtils.GetString(reader, "Content"),
                            TimeStamp = DbUtils.GetDateTime(reader, "TimeStamp")
                        };
                    }
                    reader.Close();

                    return message;
                }
            }
        }
        public void Add(Message message)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                     INSERT INTO Message (UserProfileId, Content, TimeStamp)
                     OUTPUT INSERTED.ID
                     VALUES (@UserProfileId, @Content, @TimeStamp)
                     ";
                    DbUtils.AddParameter(cmd, "@UserProfileId", message.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Content", message.Content);
                    DbUtils.AddParameter(cmd, "@TimeStamp", message.TimeStamp);

                    message.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(Message message)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Message
                           SET UserProfileId = @UserProfileId,
                               Content = @Content,
                               TimeStamp = @TimeStamp
                         WHERE Id = @Id"
                    ;

                    DbUtils.AddParameter(cmd, "@UserProfileId", message.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Content", message.Content);
                    DbUtils.AddParameter(cmd, "@TimeStamp", message.TimeStamp);
                    DbUtils.AddParameter(cmd, "@Id", message.Id);

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
                    cmd.CommandText = "DELETE FROM Message WHERE Id = @Id;";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
