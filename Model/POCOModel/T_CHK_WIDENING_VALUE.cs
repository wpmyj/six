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
	public partial class T_CHK_WIDENING_VALUE
	{
		public T_CHK_WIDENING_VALUE ToPOCO(bool isPOCO = true){
			return new T_CHK_WIDENING_VALUE(){
				PKID = this.PKID,
				CHECK_TYPE = this.CHECK_TYPE,
				TURNOUT_CODE = this.TURNOUT_CODE,
				TURNOUT_POS = this.TURNOUT_POS,
				CURVE_RADIUS_RANGE = this.CURVE_RADIUS_RANGE,
				SPEED_RANGE = this.SPEED_RANGE,
				LINE_TYPE = this.LINE_TYPE,
				WARN_LEVEL = this.WARN_LEVEL,
				WIDENING_VALUE = this.WIDENING_VALUE,
				WIDENING_TYPE1 = this.WIDENING_TYPE1,
				WIDENING_TYPE2 = this.WIDENING_TYPE2,
				WIDENING_TYPE3 = this.WIDENING_TYPE3,
				WIDENING_TYPE4 = this.WIDENING_TYPE4,
				WIDENING_TYPE5 = this.WIDENING_TYPE5,
			};
		}
	} 
}
