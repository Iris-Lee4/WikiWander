using WikiWander.Models;

namespace WikiWander.Repositories
{
    public interface IGameRepository
    {
        void Add(Game game);
        void Delete(int id);
        List<Game> GetAll();
        List<Game> GetAllByUserId(int userId);
        Game GetById(int id);
        void Update(Game game);
    }
}