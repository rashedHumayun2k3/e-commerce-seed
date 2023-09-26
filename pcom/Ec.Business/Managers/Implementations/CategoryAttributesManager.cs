using AutoMapper;
using Ec.Business.Dto.Response;
using Ec.Data.Repositories;
using Ec.Data.Repositories.Implementations;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Managers.Implementations
{
	public class CategoryAttributesManager : ICategoryAttributesManager
	{
		private readonly ICategoryAttributesRepository _categoryAttributesRepository;
		private readonly IMapper _mapper;
		private readonly ILogger<ProductManager> _logger;

		public CategoryAttributesManager(ICategoryAttributesRepository categoryAttributesRepository, IMapper mapper, ILogger<ProductManager> logger)
		{
			_categoryAttributesRepository = categoryAttributesRepository;
			_mapper = mapper;
			_logger = logger;
		}

		public async Task<List<CategoryAttributesDto>> GetAllCategoryAttributes()
		{
			_logger.LogInformation("Get all category attributes");
			var result = _mapper.Map<List<CategoryAttributesDto>>(await _categoryAttributesRepository.GetAll());
			return result.ToList();
		}

		public async Task<List<CategoryAttributesDto>> GetAllCategoryAttributesByCategoryId(int categoryId)
		{
			_logger.LogInformation("Get category attributes by categoryId({categoryId})", categoryId);
			var result = _mapper.Map<List<CategoryAttributesDto>>(await _categoryAttributesRepository.GetAllByCategory(categoryId));
			return result.ToList();
		}
	}
}
