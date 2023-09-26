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
	public class ColorManager : IColorManager
    {
		private readonly IColorRepository _colorRepository;
		private readonly IMapper _mapper;
		private readonly ILogger<ColorManager> _logger;

		public ColorManager(IColorRepository colorRepository, IMapper mapper, ILogger<ColorManager> logger)
		{
            _colorRepository = colorRepository;
			_mapper = mapper;
			_logger = logger;
		}

        public async Task<List<ColorDto>> GetAllColors()
        {
            _logger.LogInformation("Get all colors");
            var result = _mapper.Map<List<ColorDto>>(await _colorRepository.GetAll());
            return result.ToList();
        }

    }
}
