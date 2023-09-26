using Ec.Business.Dto.Response;

namespace Ec.Business.Managers
{
	public interface IAuthorManager
	{
		Task<List<AuthorDto>> GetAllAuthors();
		Task<AuthorDto> GetSingleAuthorById(int id);
	}
}
