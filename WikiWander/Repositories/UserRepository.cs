using WikiWander.Utils;

namespace WikiWander.Repositories
{
    public class UserRepository : BaseRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public User GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) {
                    cmd.CommandText = @"
                    SELECT Id, FirstName, LastName, DisplayName, Email
                    FROM Users
                    WHERE Email = @email";

                    DbUtils.AddParameter(cmd, "email", email); 

            }
        }
    }
}
