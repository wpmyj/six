//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class ASSET_WAREHOUSE
	{
		public ASSET_WAREHOUSE ToPOCO(bool isPOCO = true){
			return new ASSET_WAREHOUSE(){
				DEPT_CODE = this.DEPT_CODE,
				WAREHOUSE_CODE = this.WAREHOUSE_CODE,
				WAREHOUSE_NAME = this.WAREHOUSE_NAME,
				WAREHOUSE_TYPE = this.WAREHOUSE_TYPE,
				WAREHOUSE_CATEGORY = this.WAREHOUSE_CATEGORY,
				TOTAL_AMOUNT = this.TOTAL_AMOUNT,
				LINE_CODE = this.LINE_CODE,
				LINE_DIR = this.LINE_DIR,
				STATION_CODE = this.STATION_CODE,
				CENTER_MILE = this.CENTER_MILE,
				GRADE = this.GRADE,
				IS_ENABLE = this.IS_ENABLE,
				LNG = this.LNG,
				LAT = this.LAT,
				MARS_LNG = this.MARS_LNG,
				MARS_LAT = this.MARS_LAT,
				MEMO = this.MEMO,
			};
		}
	} 
}