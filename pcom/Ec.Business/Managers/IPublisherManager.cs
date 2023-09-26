using Ec.Business.Dto.Response;

namespace Ec.Business.Managers
{
	public interface IPublisherManager
	{
		Task<List<PublisherDto>> GetAllPublishers();
		Task<PublisherDto> GetSinglePublisherById(int id);
	}
}
