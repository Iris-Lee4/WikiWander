using WikiWander.Models;

namespace WikiWander.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);
        UserProfile GetById(int id);
    }
}