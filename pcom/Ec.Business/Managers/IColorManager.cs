using Ec.Business.Dto.Response;

namespace Ec.Business.Managers
{
	public interface IColorManager
    {
		Task<List<ColorDto>> GetAllColors();
	}
}
