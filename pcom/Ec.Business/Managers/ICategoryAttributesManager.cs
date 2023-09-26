using Ec.Business.Dto.Response;
using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Managers
{
	public interface ICategoryAttributesManager
	{
		Task<List<CategoryAttributesDto>> GetAllCategoryAttributes();
		Task<List<CategoryAttributesDto>> GetAllCategoryAttributesByCategoryId(int categoryId);
	}
}
