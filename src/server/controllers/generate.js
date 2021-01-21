import { GenerateService, UtilsService } from '../services';

/**
 * Endpoint POST /generate
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 * @memberof generate.js
 */
const generateProject = async (req, res) => {
    let codeError = 500;
    try {
        if (!req.body) {
            codeError = 400;
            throw new Error("Error => Can´t generate project because you should input data params");
          } else {
            const result = await GenerateService.generateProject();
            UtilsService.success(res, result);
          }
    } catch (err) {
        UtilsService.error(res, err, codeError);
    }
};

export default {
    generateProject
}